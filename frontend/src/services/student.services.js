import { client } from './api'
import { node } from 'prop-types';

class StudentServices {
  
  static async getStudent () {
    const result = await client.get('/student');    
    return result
  }

  static async updateNote(id, note) {    
    const result = await client.put(`/student/id/${id}`, note)
    return result
  }

  
}

export default StudentServices
