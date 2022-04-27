const app = new Vue({
    el: '#root',
    data: {
        activeIndex: 0,
        isActive: false,
        messaggio: '',
        contactsFilter: [],
        filtro: '',
		isClicked: false,
        contacts: [
    	    {
                id: 1,
    	        name: 'Michele',
    	        avatar: '_1',
    	        visible: true,
    	        messages: [
    	            {
                        date: '10/01/2020 15:30:55',
    	                message: 'Hai portato a spasso il cane?',
    	                status: 'sent'
    	            },
    	            {
                        date: '10/01/2020 15:50:00',
    	                message: 'Ricordati di stendere i panni',
    	                status: 'sent'
    	            },
    	            {
                        date: '10/01/2020 16:15:22',
    	                message: 'Tutto fatto!',
    	                status: 'received'
    	            }
    	        ],
    	    },
    	    {
                id: 2,
    	        name: 'Fabio',
    	        avatar: '_2',
    	        visible: true,
    	        messages: [
    	            {
                        date: '20/03/2020 16:30:00',
    	                message: 'Ciao come stai?',
    	                status: 'sent'
    	            },
    	            {
                        date: '20/03/2020 16:30:55',
    	                message: 'Bene grazie! Stasera ci vediamo?',
    	                status: 'received'
    	            },
    	            {
                        date: '20/03/2020 16:35:00',
    	                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
    	                status: 'sent'
    	            }
    	        ],
    	    },
    	    {
                id: 3,
    	        name: 'Samuele',
    	        avatar: '_3',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '28/03/2020 10:10:40',
    	                message: 'La Marianna va in campagna',
    	                status: 'received'
    	            },
    	            {
    	                date: '28/03/2020 10:20:10',
    	                message: 'Sicuro di non aver sbagliato chat?',
    	                status: 'sent'
    	            },
    	            {
    	                date: '28/03/2020 16:15:22',
    	                message: 'Ah scusa!',
    	                status: 'received'
    	            }
    	        ],
    	    },
    	    {
                id: 4,
    	        name: 'Alessandro B.',
    	        avatar: '_4',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '10/01/2020 15:30:55',
    	                message: 'Lo sai che ha aperto una nuova pizzeria?',
    	                status: 'sent'
    	            },
    	            {
    	                date: '10/01/2020 15:50:00',
    	                message: 'Si, ma preferirei andare al cinema',
    	                status: 'received'
    	            }
    	        ],
    	    },
    	    {
                id: 5,
    	        name: 'Alessandro L.',
    	        avatar: '_5',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '10/01/2020 15:30:55',
    	                message: 'Ricordati di chiamare la nonna',
    	                status: 'sent'
    	            },
    	            {
    	                date: '10/01/2020 15:50:00',
    	                message: 'Va bene, stasera la sento',
    	                status: 'received'
    	            }
    	        ],
    	    },
    	    {
                id: 6,
    	        name: 'Claudia',
    	        avatar: '_6',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '10/01/2020 15:30:55',
    	                message: 'Ciao Claudia, hai novità?',
    	                status: 'sent'
    	            },
    	            {
    	                date: '10/01/2020 15:50:00',
    	                message: 'Non ancora',
    	                status: 'received'
    	            },
    	            {
    	                date: '10/01/2020 15:51:00',
    	                message: 'Nessuna nuova, buona nuova',
    	                status: 'sent'
    	            }
    	        ],
    	    },
    	    {
                id: 7,
    	        name: 'Federico',
    	        avatar: '_7',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '10/01/2020 15:30:55',
    	                message: 'Fai gli auguri a Martina che è il suo compleanno!',
    	                status: 'sent'
    	            },
    	            {
    	                date: '10/01/2020 15:50:00',
    	                message: 'Grazie per avermelo ricordato, le scrivo subito!',
    	                status: 'received'
    	            }
    	        ],
    	    },
    	    {
                id: 8,
    	        name: 'Davide',
    	        avatar: '_8',
    	        visible: true,
    	        messages: [
    	            {
    	                date: '10/01/2020 15:30:55',
    	                message: 'Ciao, andiamo a mangiare la pizza stasera?',
    	                status: 'received'
    	            },
    	            {
    	                date: '10/01/2020 15:50:00',
    	                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
    	                status: 'sent'
    	            },
    	            {
    	                date: '10/01/2020 15:51:00',
    	                message: 'OK!!',
    	                status: 'received'
    	            }
    	        ],
    	    }
    	],
            
    },
    methods: {
		remove(index){
			if(this.contacts[this.activeIndex].messages.length === 1){
				const msg = {
					date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
					message: "non ci sono messaggi",
					status: 'null'
				}
				this.contacts[this.activeIndex].messages.push(msg);
			}
			console.log(index, this.contacts[this.activeIndex].messages[index])
			this.contacts[this.activeIndex].messages.splice(index, 1);
		},
        change(index){
            this.activeIndex = index;
            this.isActive = true;
        },
        send(){
			const answers = ["va bene!", "OK!", "grisati", "Pippo"];
			const random = Math.floor(Math.random() * 4);
            const messageSent = {
                date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                message: this.messaggio,
                status: 'sent'
            }
			if(messageSent.message === ""){
				alert("inserisci un messaggio valido")
			}else{
				this.contacts[this.activeIndex].messages.push(messageSent);
				this.messaggio = "";
			const messageReceived = {
				date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
				message: answers[random],
				status: 'received'
			}
			const interval = setInterval(()=>{
				this.contacts[this.activeIndex].messages.push(messageReceived);
				clearInterval(interval);
			}, 1000);
			}
            
        },
        filter(){
            this.contactsFilter = this.contacts.filter((user)=>{
                const names = user.name.toLowerCase();
                return user.name.toLowerCase().includes(this.filtro.toLowerCase());
            })
        },
        newDate(){
            dayjs.extend(window.dayjs_plugin_customParseFormat);
            this.contacts.forEach((contact, index)=>{
                contact.messages.forEach((message, index)=>{
                    dayjs.extend(window.dayjs_plugin_customParseFormat);
                    message.date = dayjs(message.date, 'MM/DD/YYYY HH:mm:ss');
                    message.date = new Date(message.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                })
            })          
        },
		deleteChat(){
			console.log(this.contacts[this.activeIndex].messages.length)
			this.contacts[this.activeIndex].messages.splice(0, this.contacts[this.activeIndex].messages.length - 1)
			console.log(this.contacts[this.activeIndex].messages.length)
			if(this.contacts[this.activeIndex].messages.length === 1){
				const msg = {
					date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
					message: "non ci sono messaggi",
					status: 'null'
				}
				this.contacts[this.activeIndex].messages.push(msg);
				this.contacts[this.activeIndex].messages.splice(0, 1);
			}
		},
    },
    mounted(){
        this.filter();
        this.newDate();
    },
  })