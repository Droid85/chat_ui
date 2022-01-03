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

const curentUser = {
  id: Math.random(),
  name: 'Andrew',
};

const userMsg = {
    id: null,
    userName: curentUser.name,
    userId: curentUser.id,
    sendDate: null,
    text: '',
};

const contactsEl = document.querySelector('#contacts');
const inputEl = document.querySelector('#input-msg');
const msgBtnEl = document.querySelector('#msg-btn');
const usersBlockEl = document.querySelector('#contacts');
const messagesEl = document.querySelector('#messages');

users.forEach(function(el) {
    contactsEl.insertAdjacentHTML('beforeend', `<div id="${el.id}" class="user">${el.name}</div>`)
});

msgBtnEl.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (!inputEl.value == '') {
    userMsg.id = Math.random();
    userMsg.sendDate = new Date().toLocaleDateString();
    userMsg.text = inputEl.value;
    renderMsg(userMsg);
    clearInput();
  }
}

function renderMsg(msg) {
  messagesEl.insertAdjacentHTML('beforeend', `
  <div class="user-mesages">
    <div class="msg-header">${msg.userName}</div>
    <div class="msg-text">${msg.text}</div>
    <div class="msg-footer">${msg.sendDate}</div>
  </div>`)
}

function clearInput() {
  inputEl.value = '';
}
