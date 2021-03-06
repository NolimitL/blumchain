import {SHA256} from "crypto-js"

class CryptoBlock{
    index: string
    timestamp: number
    data: any
    precedingHash: string
    hash: string

    constructor(index: string, timestamp: number, data: any, precedingHash=" "){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }
    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}