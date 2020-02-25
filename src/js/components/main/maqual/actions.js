
export const ActionType ={
    ADD_VALUE : "ADD_VALUE",
    SET_ANSWER: "setAnswer",
    SET_GAME : "setGame",
    SET_FORMULA : "setFormula",
    SET_CARD : "setCard",
    SELECT_CARD : "selectCard",
    FINISH_GAME : "finishGame",
    MAKE_HOME : "makeHome",
    ADD_ORDER : "addOrder",
    REF_ANSWER : "refAnswer",
    START_TIME : "startTime",
    PUSH_SCORE : "pushScore",
    BACK_HOME : "backHome"
};



export const addValue = amount => ({type:ActionType.ADD_VALUE, payload:amount});
export const setGame = () => ({type:ActionType.SET_GAME})
export const selectCard = (value) => ({type:ActionType.SELECT_CARD,value});
export const finishGame = () => ({type:ActionType.FINISH_GAME})
export const setAnswer = (answer,question,questionArray) => ({type:ActionType.SET_ANSWER,answer,question,questionArray});
export const setFormula = (res,order) => ({type:ActionType.SET_FORMULA,payload:res,order});
export const setCard = (card) => ({type:ActionType.SET_CARD,card});
export const backHome = () => ({type:ActionType.BACK_HOME});

// export const judge = (order,answer,question,questionArray) => {
//         if(answer[questionArray[order]]==value){
//             if(questionArray.length===order+1){
//                 const {maxStage,stage} = this.props;
//                 if(stage==maxStage){
//                     finishGame();
//                 }
//                 else{
//                     makeAnswer(order);
//                 }
//             }
//             else{
//                 makeFormula(order,answer,question,questionArray);
//             }
//         }
//     };

// export const makeAnswer = (order) => {
//     let answer = "1+1=2";
//     let question = "???=?";
//     let questionArray = [0,1,2,4];
//     setAnswer(answer,question,questionArray);
//     makeFormula(order,answer,question,questionArray);
// }
// export const makeFormula = (order,answer,question,questionArray) => {
//     console.log(order,answer,question,questionArray);
//     const res = <Text>{answer.slice(0,questionArray[order])}<Under_bar>_</Under_bar>{question.slice(questionArray[order]+1,question.length-questionArray[order]-1)}</Text>;
//     setFormula(res,order);
//     makeCard();
// }

// export const makeCard = () => {
//     let card = ["1","+","2","a","b","c","3","-"];
//     setCard(card);
// }