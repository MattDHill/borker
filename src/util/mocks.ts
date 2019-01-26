import { TransactionType } from '../db/entities/transaction'

export interface MappedTx {
  timestamp: number
  txid: string
  type: TransactionType
  nonce: number
  referenceNonce: number | null
  content: string | null
  value: string | null
  fee: string
  senderAddress: string
  recipientAddress: string | null
}

export const mockTxs1: MappedTx[] = [
  {
    timestamp: 1412177231,
    txid: '39128e8edacce1ada4e1df9aa5fc91431302ef951df06a78e13f4fbc3759e752',
    type: TransactionType.setName,
    nonce: 0,
    referenceNonce: null,
    content: 'MattHill',
    value: null,
    fee: '1',
    senderAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
    recipientAddress: null,
  },
  {
    timestamp: 1422182926,
    txid: '8b5ab18a8593ba3f1abae61c07bf02169487c58b0e244922b6c4578eaf6e0d35',
    type: TransactionType.bork,
    nonce: 1,
    referenceNonce: null,
    content: 'I like to bork. I like to bork',
    value: null,
    fee: '1',
    senderAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
    recipientAddress: null,
  },
  {
    timestamp: 1422184977,
    txid: '774bef2197e6394112e1ee18246f1a0137ddb19a4d2d4464c1e25217977a0460',
    type: TransactionType.like,
    nonce: 0,
    referenceNonce: 1,
    content: null,
    value: '20',
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
  },
  {
    timestamp: 1423181711,
    txid: '43873bcc83d6d811df6bff1909a5cd3fc98eb84bbaded5a44443fc86f9ef0e3b',
    type: TransactionType.bork,
    nonce: 1,
    referenceNonce: null,
    content: 'Bork some more. Bork some more.',
    value: null,
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: null,
  },
]

export const mockTxs2: MappedTx[] = [
  {
    timestamp: 1424167335,
    txid: '069aa2f138cbdc6ebd379b1e6d1cb7f86c8770ad58be27006671d528a75ba0e3',
    type: TransactionType.bork,
    nonce: 2,
    referenceNonce: null,
    content: 'Borking like there aint no tomorrow',
    value: null,
    fee: '1',
    senderAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
    recipientAddress: null,
  },
  {
    timestamp: 1424169440,
    txid: '41266e19b39dbba35128f3af72299b4636cb9250d81741b5db1987716043a7af',
    type: TransactionType.like,
    nonce: 2,
    referenceNonce: 2,
    content: null,
    value: '10',
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
  },
  {
    timestamp: 1424561124,
    txid: '99f14aa1ac661f932113cbb92cfa7ee1cfc649cbc416f7c6aa43b13ce301d3a4',
    type: TransactionType.comment,
    nonce: 3,
    referenceNonce: 1,
    content: 'And some more!',
    value: '100',
    fee: '1',
    senderAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
    recipientAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
  },
  {
    timestamp: 1424967992,
    txid: '164af924f859c9936f3bda737a986a1a85b3708c9b2fd150b36b964b11c858a6',
    type: TransactionType.bork,
    nonce: 3,
    referenceNonce: null,
    content: 'This is a long bork that will take up two whole transactions. I will write',
    value: null,
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: null,
  },
  {
    timestamp: 1425167583,
    txid: 'e3b3a8bf7e3796d908b731c0d16baba0f1e161b97d917e00cde81ff0f1452fd1',
    type: TransactionType.extension,
    nonce: 4,
    referenceNonce: 3,
    content: 'just a little more. See, I told you. Bork on.',
    value: null,
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: null,
  },
  {
    timestamp: 1425188584,
    txid: '3ffa42642f6dfd718562b8a6d04c403b20b59fe873eadd1960e402769cee1318',
    type: TransactionType.follow,
    nonce: 5,
    referenceNonce: null,
    content: null,
    value: '200',
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: 'DSJdZogGLmREMZTyJGSzSs2RL9UJjeqKd7',
  },
]

export const mockTxs3: MappedTx[] = [
  {
    timestamp: 1425287522,
    txid: '4cb6f18366e4a32ff69e681d192aec89a4d8721af544725fe6a02ecde4311605',
    type: TransactionType.setName,
    nonce: 6,
    referenceNonce: null,
    content: 'Aiden McClelland',
    value: null,
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: null,
  },
  {
    timestamp: 1425399510,
    txid: '8a3e0fe9ebc5e2fec31b12e7880f0dc184b56fd2d0541fcc3e6c0a1530826913',
    type: TransactionType.setBio,
    nonce: 7,
    referenceNonce: null,
    content: 'I am a Bork Master',
    value: null,
    fee: '1',
    senderAddress: 'D65dwxsVdaCFHUGqAVWKgdddsa9ADxXcGk',
    recipientAddress: null,
  },
]
