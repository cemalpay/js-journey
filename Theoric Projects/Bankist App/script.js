'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Cem Alpay Tas',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Payidar Kaya',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Recep Tayyip Erdogan',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 2023,
};

const account4 = {
  owner: 'Ekrem Imamoglu',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  //eski değerleri boşalttık
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` 
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;
    //containerMovements bölümünün içine html kodunu ekliyoruz. ()
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

// username oluşturma fonksiyonu
const user = 'Cem Alpay Tas'; // cat

// tüm harfleri küçük harfe çevirdik, boşluklardan ayrdık, ayırdığımız kelimelerin ilk harfleri aldık ve birleştirdik.
const createUsernames = function (accs) {
  //accounts içindeki her bir account için username oluşturuyoruz.
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['TRY', 'Turkish lira'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//kur çevirme fonksiyonu
// Functional Programming
const euroToTRY = 0.05;
const movementsTRY = movements.map(mov => mov * euroToTRY);
console.log(movementsTRY);
console.log(movements);

//Traditional Programming
// const movementsTRYfor = [];
// for (const mov of movements) movementsTRYfor.push(mov * euroToTRY);
// console.log(movementsTRYfor);

//map methodu kullanarak movements arrayinin her bir elemanını işliyoruz.
//math.abs ile negatif değerleri pozitif değere çeviriyoruz.
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

//filter methodu kullanarak sadece pozitif değerleri alıyoruz.
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

//filter methodu kullanarak sadece negatif değerleri alıyoruz.
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

/*
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor
.push(mov);
console.log(depositsFor);
*/
// accumulator -> snowball
// const balance = movements.reduce((acc, curr) => acc + curr, 0);
//   console.log(`Iteration ${i}: ${acc}`);
//   /* LOG RESULT
//    Iteration 0: 0
//    Iteration 1: 200
//    Iteration 2: 650
//    Iteration 3: 250
//    Iteration 4: 3250
//    Iteration 5: 2600
//    Iteration 6: 2470
//    Iteration 7: 2540
//    */
// console.log(balance);

//Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
