// Напиши скрипт управления личным кабинетом
// интернет банка. Есть объект account
// в котором необходимо реализовать методы
// для работы с балансом и историей транзакций.

//  Типов транзацкий всего два.
//  Можно положить либо снять деньги со счета.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const { DEPOSIT, WITHDRAW } = Transaction;

const account = {
  balance: 0,

  // История транзакций
  transactions: [],

  //Метод создает и возвращает объект транзакции.
  //Принимает сумму и тип транзакции.
  createTransaction(amount, type) {
    this.transactions.push({
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    });
  },

  // Метод отвечающий за добавление суммы к балансу.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта
  // транзакции, после чего добавляет его в
  // историю транзакций
  deposit(amount) {
    this.balance += amount;
    const x = `Ваш счет пополнен на: ${amount} credits`;
    console.log(x);
    this.createTransaction(amount, DEPOSIT);
  },

  // Метод отвечающий за снятие суммы с баланса.
  // Принимает сумму танзакции.
  // Вызывает createTransaction для создания объекта
  // транзакции, после чего добавляет его в
  // историю транзакций.
  // Если amount больше чем текущий баланс, выводи
  // сообщение о том, что снятие такой суммы
  // не возможно, недостаточно средств.
  withdraw(amount) {
    let { balance } = account;
    if (amount > balance) {
      console.log(`На вашем счету недостаточно средств!!!`);
      return;
    }
    this.balance -= amount;
    const x = `С Вашего счета снято: ${amount} credits`;
    console.log(x);
    this.createTransaction(amount, WITHDRAW);
  },

  // Метод возвращает текущий баланс
  getBalance() {
    let { balance } = account;
    console.log(`На вашем счету = ${balance} $`);
  },

  // Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    let result;

    for (const transaction of this.transactions) {
      for (const entry of Object.entries(transaction)) {
        if (Object.entries(transaction)[0][1] === id) {
          result = transaction;
        }
      }
    }
    if (result === undefined) {
      return console.log(
        `Транзакция по id=${id} не найдена!!!`,
      );
    }
    console.log(result);
  },

  // Метод возвращает количество средств
  // определенного типа транзакции из всей
  // истории транзакций
  getTransactionTotal(type) {
    let result = 0;
    for (const transaction of this.transactions) {
      if (Object.entries(transaction)[1][1] === type) {
        result += Object.entries(transaction)[2][1];
      }
    }
    console.log(
      `Общая сумма транзакций ${type} = ${result} $`,
    );
  },
};

const { balance, transactions } = account;
account.getBalance();
account.deposit(20);
account.withdraw(10);
account.deposit(20);
account.deposit(20);
account.withdraw(10);
account.withdraw(10);
// console.table(transactions);
account.getBalance();

account.getTransactionTotal(DEPOSIT);
account.getTransactionTotal(WITHDRAW);

account.getTransactionDetails(3);
account.getTransactionDetails(2);
account.getTransactionDetails(9);
account.getTransactionDetails(12);
