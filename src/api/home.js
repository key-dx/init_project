import api from '@/utils/http'


const apiName = {
  name: "接口名",
  user: "接口名",
}

const name = ({ district }) => {
  return api.post(apiName.name, {
    district
  })
}
const user = ({ district }) => {
  return api.get(apiName.user, {
    district
  })
}

export default {
  name,
  user,

}