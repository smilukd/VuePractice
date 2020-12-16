<template>
    <div>
        <form @submit.prevent="fetchContacts">
            <input type="text" name="f_name" placeholder="First Name" v-model.trim="inputFirstName">
            <input type="text" name="l_name" placeholder="Last Name" v-model.trim="inputLastName">
            <input type="email" name="email" placeholder="Email Address" v-model.trim="inputEmail">
            <input type="text" name="externalId" placeholder="External ID" v-model.trim="inputExternalId">
            <button>Search</button>
        </form>
        <button @click="updateContactById">Update Test User</button>
        <div v-for="(contact,index) in contacts" :key="index">
            <p v-if="index == 43">
                {{ contact.first_name }} [ {{index}} ]
                <br>
                {{ contact.last_name }}
                <br>
                <em><b>{{ contact.external_id }} </b></em>
                <span v-for="(ids, idIndex) in contact.external_ids" :key="idIndex">{{ ids.external_id }} </span>

                <br><br>
            </p>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['token'],
        data() {
            return {
                inputFirstName: '',
                inputLastName: '',
                inputEmail: '',
                inputExternalId: '',
                contacts: []
            }
        },
        methods: {
            fetchContacts() {

                // get contacts from the API with fetchApi. Starting at page 1.
                this.fetchApi(this.token, 1);
                console.log(this.contacts);
            },
            // (string, integer)
            fetchApi(token, page) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + this.token);
                myHeaders.append("Content-Type", "text/plain");
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    //body: raw,
                    redirect: 'follow'
                };
                fetch("https://public.totalexpert.net/v1/contacts?page[number]=" + page + "&page[size]=100", requestOptions)
                    .then(response => response.text())
                    .then((result) => {
                        // parse the JSON data returned.
                        var results = JSON.parse(result);

                        const pushItem = (item) => {
                            this.contacts.push(item);
                        }
                        // push each record to the array
                        results.items.forEach(pushItem);

                        console.log("Length: " + results.items.length);

                        // check to see if the amount of results returned is 100, if it is re run the api call on an additional page, recursively
                        if (results.items.length == 100) {
                            var nextpage = page + 1;

                            this.fetchApi(this.token, nextpage);
                        }
                    })
                    .catch(error => console.log('error', error));



            },
    //this is kinda unneeded. May delete later if this does not prove useful
            updateContactById() {
                //run this once per contact that needs updating. This could be run inside a loop that parses over the entire array of users that were selected. 
                this.patch(this.contacts[43],"Hibbing"); 
            },

            // provide (contact object to update, new external_id to update with)
            // (object, string)
            patch(contact, updatedExternalId) {
                //decide if the contact has external id(s)
                
                
                if(contact.external_id == '' || contact.external_id == null){
                    console.log("none");
                    console.log(contact.external_ids);
                    //the contact has no external Id assigned, and therefore no external_ids array, assign updatedExternalId to external_id
                    const dataToPatch = JSON.stringify({
                        "external_id": updatedExternalId,
                    });
                    const contactId = contact.id;
                    this.patchApi(contactId, dataToPatch)
                    
                }
//test this condition
                else if( contact.external_id != '' && contact.external_ids.size === 0 ){ //(contact.external_ids === null || contact.external_ids === undefined )){
                    console.log("just one");
                    // the contact has a value in external_id, but no values in the external_ids array
                    
                    var setSource = '';
                    // all external_ids need to have an external_id and a source. Define the source
                    if(contact.source != '' && contact.source != null && contact.source != undefined){
                        //has a contact value
                        setSource = contact.source;
                    }
                    else{
                        // contact.source does not have a value
                        setSource = "contact_link";
                    }
                    // create a new object with our old external_id in it.
                    var singelId = {external_id: contact.external_id, source: setSource};
                    
                    const dataToPatch = JSON.stringify({
                        "external_id": updatedExternalId,
                        "external_ids": singelId
                    });
                    const contactId = contact.id;
                    this.patchApi(contactId, dataToPatch)
                }
                else{
                    // the contact has multiple external_ids, the array already exists, copy the array and add the original ID to it.
                    
                    console.log("multiple");
                    //get the array of objects with all of the ids in it
                    var currentIds = contact.external_ids;
                    
                    var copySource = '';
                    // all external_ids need to have an external_id and a source. Define the source
                    if(contact.source != '' && contact.source != null && contact.source != undefined){
                        //has a contact value
                        copySource = contact.source;
                    }
                    else{
                        // contact.source does not have a value
                        copySource = "contact_link";
                    }
                    // create a new object with our old external_id in it.
                    var currentId = {external_id: contact.external_id, source: copySource};
                    //push it to the array of objects. 
                    currentIds.push(currentId);
                    
                    console.log("Pre: " + updatedExternalId);
                    const dataToPatch = JSON.stringify({
                        "external_id": updatedExternalId,
                        "external_ids": currentIds
                    });
                    const contactId = contact.id;
                    this.patchApi(contactId, dataToPatch)
                }
                
            },
            
            // (string, object)
            patchApi(contactId, updatedData){
                console.log("data: " + updatedData)
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + this.token);
                myHeaders.append("Content-Type", "application/json");


                var raw = updatedData;
                
                var requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("https://public.totalexpert.net/v1/contacts/" + contactId, requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }
    }

</script>


<style scoped>
    p {
        font-size: 10pt;
    }

</style>
