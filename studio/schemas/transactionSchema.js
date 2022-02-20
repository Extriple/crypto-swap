export const transactionSchema = {
    name: 'transaction',
    title: 'Transactions',
    type: 'document',
    fields: [
        {
            name: 'txHash',
            title: 'Transactions Hash',
            type: 'string',
        },
        {
            name: 'fromAddress',
            title: 'From (Address Wallet',
            type: 'string',
        },
        {
            name: 'toAddress',
            title: 'To (Address Wallet)',
            type: 'string',
        },
        {
            name: 'amount',
            title: 'Amount',
            type: 'number',
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
        },
    ]
}