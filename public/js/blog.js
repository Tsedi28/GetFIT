const form = document.getElementById('form')
const title = document.getElementById('#blogTitle');
const text = document.getElementById('#textarea');
const blogMessageContainer = document.querySelector('.blog-message-container');
const blogMessage = document.getElementById('#blog-message');


// Set form to invalid
let isValid = false;

function validateForm(){
    // use contraint API
    isValid = form.checkValidity();

    //Style message for error
    if(title && text === !isValid){
    message.textContent = 'Please fill out all fields.';
    blogMessage.style.color = 'red';
    blogMessageContainer.style.borderColor = 'red';
    
    return;

    }
    //if the form is valid
    if (title && text === !isValid){
        message.textContent = 'Congrats! New community post added';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}



const addNewBlog = async (e) => {
     e.preventDefault();

     validateForm();

     if(isValid){

     const newBlogs = {
        title: form.title.value,
        textarea: form.textarea.value,
    }

    if (newBlogs){
        const response = await fetch('/api/blog',{
            method:'POST',
            body: JSON.stringify(newBlogs),
            headers: {'Content-Type' : 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
            console.log ('It worked!')
        } else {
            alert ('Failed to add new community post. Please try again');
        }
    }
}};



document.getElementById('submitBlog').addEventListener('click', addNewBlog);
