export const PledgeConstants = {
  REQUEST_PLEDGES: "REQUEST_PLEDGES",
  RECEIVE_PLEDGES: "RECEIVE_PLEDGES",
  REQUEST_PLEDGE: "REQUEST_PLEDGE",
  RECEIVE_PLEDGE: "RECEIVE_PLEDGE",
  CREATE_PLEDGE: "CREATE_PLEDGE",
  REMOVE_PLEDGE: "REMOVE_PLEDGE"
}

export const requestPledges = () => ({
  type: PledgeConstants.REQUEST_PLEDGES
});

export const receivePledges = pledges => ({
  type: PledgeConstants.RECEIVE_PLEDGES,
  pledges
});

export const requestPledge = () => ({
  type: PledgeConstants.REQUEST_PLEDGE
});

export const receivePledge = pledge_id => ({
  type: PledgeConstants.RECEIVE_PLEDGE,
  pledge_id
});

export const createPledge = (other_user_id) => ({
  type: PledgeConstants.CREATE_PLEDGE,
  other_user_id
})

export const removePledge = other_user_id => ({
  type: PledgeConstants.REMOVE_PLEDGE,
  other_user_id
})
