import { Component, inject, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private auth: Auth = inject(Auth)

  public form= {
    name:'',
    email:'',
    assunto:'',
    descricao:'',
    date:'',
    sended:false

  }

  private firestore: Firestore = inject(Firestore);
  
  contactsCollection = collection(this.firestore, 'contacts')

  authState = authState(this.auth);
  authStateSubscription = new Subscription

  sendContact(){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      this.form.name.trim().length < 3 ||
      !regexEmail.test(this.form.email.trim()) ||
      this.form.assunto.trim().length < 3 ||
      this.form.descricao.trim().length < 5
    ) return false;

    const d = new Date();
    this.form.date = d.toISOString().split('.')[0].replace('T', ' ');

    addDoc(this.contactsCollection, this.form)
    .then((data) => {
      console.log('Contato salvo com Id :' + data.id)
      this.form.sended = true;
    })

    return false
  }
  
  refresh(){
this.form.name=''
this.form.email=''
this.form.assunto=''
this.form.descricao=''
this.form.sended=false
  }

}
