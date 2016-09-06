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

export const receivePledge = pledge => ({
  type: PledgeConstants.RECEIVE_PLEDGE,
  pledge_id
});
