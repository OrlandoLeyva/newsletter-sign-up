const form = document.getElementById('email-form')
const main = document.querySelector('main')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    console.log(isValidEmail(email));
    isValidEmail(email) ? renderSuccessMessage() : renderErrorStates()
})

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function renderErrorStates(){
    form.classList.add('error')
}

function renderSuccessMessage(){
    main.innerHTML = `
    <div class="success-message">
        <div>
            <img src="./assets/images/icon-success.svg" alt="success icon">
            <h2 class="success-title">Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to ash@loremcompany.com. 
            Please open it and click the button inside to confirm your subscription.</p>
        </div>
    </div>
    `
}