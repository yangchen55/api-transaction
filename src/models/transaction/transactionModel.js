
import transactionSchema from './transactionSchema.js'

export  const insertTransaction = (obj) => {
  return transactionSchema(obj).save();
  
}

// CRUD 

// insert 
// read all transaction  and we will use filter to pass user id ,find by id is new thing
export const getAllUsersTransactions =  (filter) => {
    return transactionSchema.find(filter);
}

// delete
