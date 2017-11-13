import axios from 'axios'

const protocol = document.location.protocol
const host = document.location.host
const backendUrl = `${protocol}//${host}/tsn/api`

const fetchHistory = () => {
  return axios.request({
    url: backendUrl + '/history',
    method: 'get'
  })
    .then((res) => {
      const history = res.data

      return history
    })
}

const fetchSolution = (index) => {
  return axios.request({
    url: backendUrl + '/solution',
    method: 'post',
    data: {
      index: index
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((res) => {
      const solution = res.data

      return solution
    })
}

const fetchRules = () => {
  return axios.request({
    url: backendUrl + '/rules',
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
