import Together from '../images/illustration-grow-together.svg'
import conversations from '../images/illustration-flowing-conversation.svg'
import Users from '../images/illustration-your-users.svg'

export const color = {
    pink: 'hsl(322, 100%, 66%)',
    lightPink: 'hsl(321, 100%, 78%)',
    lightRed: 'hsl(0, 100%, 63%)',

    veryDarkCyan: 'hsl(192, 100%, 9%)',
    veryPaleBlue: 'hsl(207, 100%, 98%)'
}

export const features = [
    {
        title: 'Grow Together',
        description: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think fo the insightful conversation you miss out on with feedback form.',
        image: Together,
        imgStart: false
    },
    {
        title: 'Flowing conversations',
        description: "You wouldn't paginate a converatiuon in real life, so why do it online? Our threads have just-in-time leading for a more natural flow.",
        image: conversations,
        imgStart: true
    },
    {
        title: 'Your Users',
        description: 'It takes no time at all to integrate Huddle with your app authentication solution. This means, once signed in to your app, your users can start chatting immediately',
        image: Users,
        imgStart: false
    },
]