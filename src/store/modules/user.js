const state = {
  token: ''
};

const mutations = {
  // 设置token
  SET_TOKEN(commit, data) {
    commit.token = data;
  }
};

const actions = {
  // 设置token
  async setKey(context, data) {
    await context.commit('SET_TOKEN', data);
  }
};

export default {
  state,
  mutations,
  actions
};
