const users = [
    {
      id: 1,
      name: 'Bob',
    },

    {
      id: 2,
      name: 'Djoe',
    },
  
    {
      id: 3,
      name: 'Iren',
    },
  
    {
      id: 4,
      name: 'Tom',
    },
  
    {
      id: 5,
      name: 'Helen',
    },
  
    {
      id: 6,
      name: 'Nike',
    },
  
    {
      id: 7,
      name: 'Matias',
    },
];

const userMsg = {
    id: null,
    userName: '',
    userId: null,
    sendDate: null,
    text: '',
};

const contactsEl = document.querySelector('#contacts');

users.forEach(function(el) {
    contactsEl.insertAdjacentHTML('beforeend', `<div class="user">${el.name}</div>`)
})

// userMsg.sendDate = new Date();

// console.log(userMsg)