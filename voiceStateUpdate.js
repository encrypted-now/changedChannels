//This script needs to be used in the voiceStateUpdate event.
//The focus of this system is to make servers less polluted compared to a large number of channels.

//Here is the ID of the categories in which you want the channels to perform a certain function.

//Example, category = ['21319402149120','32104214021491']

//Code example for discord stable v13;

  const category = ['', '', '', '','']
  
  if (oldStates.channel == null && newStates.channel !== null) {

    if (category.includes(newStates.channel.parentId)) changedChannel(newStates, true, 1)

  } else if (oldStates.channel !== null && newStates.channel !== null) {

    if (category.includes(newStates.channel.parentId)) changedChannel(newStates, true, 1)
    if (category.includes(oldStates.channel.parentId)) changedChannel(oldStates, false, 0)
  
  } else if (oldStates.channel !== null && newStates.channel == null) {

    if (category.includes(oldStates.channel.parentId)) changedChannel(oldStates, false, 0)
    
  }

  function changedChannel(states, boo, number) {

    if (states.channel.members.size == number) {
      states.channel.permissionOverwrites.edit(states.guild.roles.everyone.id, {
        VIEW_CHANNEL: boo,
      })
    }
  

