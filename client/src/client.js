import axios from 'axios'

const fetchHistory = () => {
  return axios.request({
    url: 'http://localhost:3030/history',
    method: 'get'
  })
    .then((res) => {
      const history = res.data

      return history
    })
}

const fetchSolution = (index) => {
  return axios.request({
    url: 'http://localhost:3030/solution',
    method: 'post',
    data: {
      index: index
    }
  })
    .then((res) => {
      const solution = res.data

      return solution
    })
}

export default {
  fetchHistory,
  fetchSolution
}
