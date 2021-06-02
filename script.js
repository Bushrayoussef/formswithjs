async function register(){

    const fullname = document.forms["register_form"]["Fullname"].value;
    if (fullname == ' ') {
        alert('Full name must be filled');
        return false;
    }


}