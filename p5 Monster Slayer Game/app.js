//we can access functions from outside Vue, just like normal. Place functions out here that are used multiple times by the vue code, but do not depend on vue itself to function. 
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    methods: {
        attackMonster() {
            //calculate damage we are dealing, and subtract from monsterHealth

            // get attack value between 5 and 12
            var attackValue = getRandomValue(5, 12);

            //subtract attack from monsterHealth
            this.monsterHealth -= attackValue;
            
            //add event to log
            this.addLogMessage('player','attack',attackValue);

            //now attack the player, call attackPlayer function
            this.attackPlayer();

            //increment the round
            this.currentRound++;

        },
        attackPlayer() {
            //the monster attacks the player, subtract attackValue from playerHealth

            // attack value between 8 and 15
            var attackValue = getRandomValue(8, 15);

            //subtract attack from playerHealth
            this.playerHealth -= attackValue;
            
            //add event to log
            this.addLogMessage('monster','attack',attackValue);
        },
        specialAttackMonster() {

            //attack between 10-25
            const attackValue = getRandomValue(10, 25);

            //subtract attackValure from monsterHealth
            this.monsterHealth -= attackValue;

            //add event to log
            this.addLogMessage('player','attack',attackValue);
            
            //monster gets to attack back
            this.attackPlayer();

            //increment the round counter
            this.currentRound++;
        },
        healPlayer() {
            //healing counts as a round
            this.currentRound++;

            //get a random value between 8 and 20 to heal
            const healValue = getRandomValue(8, 20);

            //add healValue to playerHealth
            //check if the healValue would make health > 100, if so make playerHealth 100, else sum it.
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }

            //add event to log
            this.addLogMessage('player','heal', healValue);
            
            // monster still attacks after a heal
            this.attackPlayer();
        },
        startNewGame(){
            //reset values and start new game
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner = null,
                this.logMessages = []
        },
        surrender(){
            //player surrenders, monster wins
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            // who did the action
            // what whas the action, attack, heal etc
            // how much did it change?
            
            //add something to the BEGINNING of the array, unshift does that instead of push
            //push and object to array
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
                
            });
        }
    },
    computed: {
        //set the width property in css to a % width
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {
                    width: '0%'
                }
            } else {
                return {
                    'width': this.monsterHealth + '%'
                }
            }

        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {
                    width: '0%'
                }
            } else {
                return {
                    'width': this.playerHealth + '%'
                }
            }

        },
        //limit special attack to once every 3 rounds
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        //watch for player and monster health to be <= 0
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // a draw
                this.winner = "draw";
            } else if (value <= 0) {
                //player lost
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // a draw
                this.winner = "draw";
            } else if (value <= 0) {
                //monster lost
                this.winner = "player";
            }
        }
    }
});
app.mount('#game')
