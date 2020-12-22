//This script needs to be used in the voiceStateUpdate event.
//The focus of this system is to make servers less polluted compared to a large number of channels.

//Here is the ID of the categories in which you want the channels to perform a certain function.
//Example, const category = ['21319402149120','32104214021491']

  const category = ['', '', '', '','']
  
  const newChannel = newStates.channel;
  const oldChannel = oldStates.channel;
  
  //Here is the member's entry on the channel
  if (oldChannel == null && newChannel !== null && category.includes(newChannel.parentID)) {
    
    console.log(`Member joined channel ${newChannel.name}`)
    changedChannel(newStates, true, 1)
  
  //Here is the member switch between channels
  } else if(oldChannel !== null && newChannel !== null && category.includes(newChannel.parentID)) {

    console.log(`Member changed ${oldChannel.name} for ${newChannel.name}`)
    changedChannel(newStates, true, 1)
    changedChannel(oldStates, false, 0)

  //Here is the output of the channel member
  } else if (oldChannel !== null && newChannel == null && category.includes(oldChannel.parentID)) {
  
    console.log(`Member left the ${oldChannel.name}`)
    changedChannel(oldStates, false, 0)
  }

  //This function will change the permission of the channels for everyone regarding the entry and exit of the member
  function changedChannel(states, boo, number) {

    if (states.channel.members.size == number) {
      states.channel.updateOverwrite(states.guild.roles.everyone.id, {
        VIEW_CHANNEL: boo,
      })
    }
  }
