import axios from 'axios'

const applicationServerUrl = 'http://localhost:3030'

const fetchHistory = () => {
  return axios.request({
    url: applicationServerUrl + '/history',
    method: 'get'
  })
    .then((res) => {
      const history = res.data

      return history
    })
}

const fetchSolution = (index) => {
  return axios.request({
    url: applicationServerUrl + '/solution',
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

const fetchRules = () => {
  return axios.request({
    url: applicationServerUrl + '/rules',
    method: 'get'
  })
    .then((res) => {
      const rules = res.data

      return rules
    })
}

export default {
  fetchHistory,
  fetchSolution,
  fetchRules
}
