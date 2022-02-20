console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgone = document.querySelector('#errormsg')
const msgtwo = document.querySelector('#output')



weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const place = search.value
  msgtwo.textContent = ''
  msgone.textContent = 'Loading...'

  fetch("/weather?address="+place).then((response) => {
    response.json().then((data) => {
      
      if (data.error)
        msgone.textContent = data.error
      else {
        msgone.textContent = data.location
        msgtwo.textContent = data.forecast
      }
    })
  })
})
