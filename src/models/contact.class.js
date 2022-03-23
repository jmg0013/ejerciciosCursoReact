export class Contact{
    name = '';
    apellido = '';
    email = '';
    completed = false;

    constructor(name, apellido, email, completed){
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.completed = completed;
    }
}