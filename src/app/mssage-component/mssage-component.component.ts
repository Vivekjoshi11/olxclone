import { Component } from '@angular/core';

interface Message {
  text: string;
  time: string;
  sent: boolean;
}

interface Contact {
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  lastSeen: string;
  messages: Message[];
}

@Component({
  selector: 'app-mssage-component',
  templateUrl: './mssage-component.component.html',
  styleUrl: './mssage-component.component.css'
})
export class MssageComponentComponent {

  
    contacts: Contact[] = [
      {
        name: 'John Doe',
        avatar: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png',
        lastMessage: "Hey, how's it going?",
        time: '10:30 AM',
        lastSeen: '11:15 AM',
        messages: [
          { text: "Hey, how's it going?", time: '10:30 AM', sent: false },
          { text: 'Hi, how are you?', time: '10:35 AM', sent: true }
        ]
      },
      // Add more contacts as needed
    ];
  
    selectedContact: Contact | null = null;
    newMessage: string = '';
  
    selectContact(contact: Contact): void {
      this.selectedContact = contact;
    }
  
    sendMessage(): void {
      if (this.newMessage.trim() && this.selectedContact) {
        this.selectedContact.messages.push({
          text: this.newMessage,
          time: new Date().toLocaleTimeString(),
          sent: true
        });
        this.newMessage = '';
      }
    }
  }

