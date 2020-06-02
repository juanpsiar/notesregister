import BasicQueries from '../db/BasicQueries'

class Student {

    private static collectionName: string = 'notes'

    static async getStudents () {
		return BasicQueries.getAllData(this.collectionName)
	}
}


export default Student;