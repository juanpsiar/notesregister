import * as mongodb from 'mongodb'
import db from './db'

class BasicQueries {

	static async saveData (name: string, data: any) {
		return db.query((c: any) => c.collection(name).insertOne(data))
	}

	static async saveAllData (name: string, data: any) {
		return db.query((c: any) => c.collection(name).insertMany(data))
	}

	static async getAllData (name: string) {
		return db.query((c: any) => c.collection(name).find().toArray())
	}

	static async updateOneByQuery (name: string, query: any, data: any) {
		return db.query((c: any) => c.collection(name).updateOne(query, { $set: data }))
	}

	static async updateAllByQuery (name: string, query: any, data: any) {
		return db.query((c: any) => c.collection(name).updateMany(query, { $set: data }))
	}

	static async createIndexToCollection (name: string, field: any, option?: any) {
		return db.query((c: any) => c.collection(name).createIndex(field, option))
	}

	static convertStringToMongoObjectId (id: string) {
		return new mongodb.ObjectID(id)
	}
}

export default BasicQueries