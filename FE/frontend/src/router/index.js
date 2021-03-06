import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Member/LoginPage.vue';
import Signup from '@/views/Member/SignupPage.vue';
import Question from '@/views/Question/QuestionPage.vue';
import QuestionAnswer from '@/components/QuestionAnswerList.vue'
import NotFoundPage from '@/views/NotFoundPage.vue';
import Interview from '@/views/Question/InterviewPage.vue';
import InvitePage from '@/views/Question/InvitePage.vue';
import VideoDownload from '@/views/Question/videoDownload.vue';
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Home',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
 
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/question',
        component: Question,
        children:[
            {
            path: ':qnasId',
            component: QuestionAnswer,
            name: 'QuestionAnswer',
            // children:[
            //     {
            //     path: ':qnaId',
            //     component: QuestionAnswerDetail,
            //     name : 'QuestionAnswerDetail',
            //     props: true
            //     }
            // ]
            }
        ]
    },
    {
        path: '/videodownload/:sessionId',
        component: VideoDownload,
        props: true,
    },
    {
        path: '/interview',
        component: Interview,
    },
    // {
    //     path: '/loginintroduce',
    //     component: LoginIntroduce,
    // },

    {
        path: '/solomonjeob/interview/invite/:sessionId',
        component: InvitePage,
        props: true,
    },

    {
        path: '/:anything(.*)*', //  '/:catchAll(.*)*'
        component: NotFoundPage,
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router