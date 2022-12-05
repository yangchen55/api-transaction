
import transactionSchema from './transactionSchema.js'

export  const insertTransaction = (obj) => {
  return transactionSchema(obj).save();
  
}

