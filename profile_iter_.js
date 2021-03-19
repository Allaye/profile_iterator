const data = [
    {
        name: 'Phily Brian',
        age: 26,
        gender: 'female',
        lookingfor: 'men',
        location: 'Kaduna',
        image: 'https://randomuser.me/api/portraits/women/29.jpg'

    },

    {
        name: 'Betty Tracy',
        age: 36,
        gender: 'female',
        lookingfor: 'men',
        location: 'Chicago',
        image: 'https://randomuser.me/api/portraits/women/36.jpg'

    },

    {
        name: 'Stefan Rudiga',
        age: 22,
        gender: 'male',
        lookingfor: 'women',
        location: 'Berlin',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'

    },

    {
        name: 'Jones Water',
        age: 46,
        gender: 'male',
        lookingfor: 'women',
        location: 'London',
        image: 'https://randomuser.me/api/portraits/women/46.jpg'

    },

    {
        name: 'Man no name',
        age: 66,
        gender: 'binary',
        lookingfor: 'No one',
        location: 'Italy',
        image: 'https://randomuser.me/api/portraits/men/66.jpg'

    },
];


// profile iterators

function profileIterators(profile){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profile.length ? 
            { value: profile[nextIndex++], done: false } :
            { done: true };
        }
    };
}

const profiles = profileIterators(data);

//next event 
document.getElementById('next').addEventListener('click', () =>{
    const currentprofile =  profiles.next().value;
    if(currentprofile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        
        <ul class="list-group">
            <li class="list-group-item">Names: ${currentprofile.name}</li>
            <li class="list-group-item">Age: ${currentprofile.age}</li>
            <li class="list-group-item">Location: ${currentprofile.location}</li>
            <li class="list-group-item">Perference: Interested in ${currentprofile.lookingfor}</li>
            
        </ul>
        
        `;

        document.getElementById('imageDisplay').innerHTML = `
        
        <img src="${currentprofile.image}">
        
        `;
    }else{
        window.location.reload();
    }
});
