import "./EmojiPad.css"

function EmojiPad (props){

    let emojiPack = "😀😀😃😄😁😆🤩😅😂🤣☺️😊😇🙂🙃😉😌😍😘😗😙😚😋🤪😜😝😛🤑🤗🤓😎🤡🤠😏😒😞😔😟😕🙁☹️😣😖😫😩😤😠😡🤬😶😐😑😯😦😧😮😲😵🤯😳😱😨😰😢😥🤤😭😓😴🥱🙄🤨🧐🤔🤫🤭🤥😬🤐🤢🤮🤧😷🤒🤕😈👿👹👺💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾👐🙌👏🙏🤲🤝👍👎👊✊🤛🤜🤞✌️🤘🤏👌👈👉👆👇☝️✋🤚🖐🖖👋🤙💪🖕🤟✍️🤳🖖💄💋👄👅👂🦻👃🦵🦶🦾🦿👣👁👀🗣👤👥👶👦👧🧒👨👩🧑👱‍♀️👱🧔👴👵🧓👲👳‍♀️👳🧕👮‍♀️👮👷‍♀️👷💂‍♀️💂🕵️‍♀️🕵️👩‍⚕️👨‍⚕️👩‍🌾👨‍🌾👩‍🍳👨‍🍳👩‍🎓👨‍🎓👩‍🎤👨‍🎤👩‍🏫👨‍🏫👩‍🏭👨‍🏭👩‍💻👨‍💻👩‍💼👨‍💼👩‍🔧👨‍🔧👩‍🔬👨‍🔬👩‍🎨👨‍🎨👩‍🚒👨‍🚒👩‍✈️👨‍✈️👩‍🚀👨‍🚀👩‍⚖️👨‍⚖️🤶🎅👸🤴👰🤵🤰🤱🙇‍♀️🙇💁💁‍♂️🙅🙅‍♂️🙆🙆‍♂️🙋🙋‍♂️🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️🙎🙎‍♂️🙍🙍‍♂️💇💇‍♂️💆💆‍♂️🧖‍♀️🧖‍♂️🧏🧏‍♂️🧏‍♀️🧙‍♀️🧙‍♂️🧛‍♀️🧛‍♂️🧟‍♀️🧟‍♂️🧚‍♀️🧚‍♂️🧜‍♀️🧜‍♂️🧝‍♀️🧝‍♂️🧞‍♀️🧞‍♂️🕴💃🕺👯👯‍♂️🚶‍♀️🚶🏃‍♀️🏃🧍🧍‍♂️🧍‍♀️🧎🧎‍♂️🧎‍♀️👨‍🦯👩‍🦯👨‍🦼👩‍🦼👨‍🦽👩‍🦽🧑‍🤝‍🧑👫👭👬💑👩‍❤️‍👩👨‍❤️‍👨💏👩‍❤️‍💋‍👩👨‍❤️‍💋‍👨👪👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👦👩‍👧👩‍👧‍👦👩‍👦‍"
    let emojis = Array.from(emojiPack)

    const addEmoji = function(e){
        let x = e.target.innerText;
        props.inputFieldVal.current.value = props.inputFieldVal.current.value  + x
    }
    
return(
    <div className='emojiPadCont'>
        <div className="emojiPad" onClick={addEmoji}>
            {emojis.map((item, index)=>{
               return( item !== '&zwj' ? <div key={index}>{item}</div> : <></>)
            })}
        </div>
    </div>
)
}

export default EmojiPad