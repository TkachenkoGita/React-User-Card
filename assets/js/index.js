

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
function App(){

    return  (<>
    <UserInfo />
    </>)
        
    
}
function UserInfo(){
    const user={
            imgSrc:'https://i.redd.it/young-orlando-bloom-v0-vj2j2n8qk9qb1.jpg?width=1757&format=pjpg&auto=webp&s=628b9527f5cf19430867b0848f67955bbcb1be32',
            firstName: 'Orlando',
            lastName: 'Bloom',
            gmail: '@orlandobloom',
            gender: 'male',
            tweets:1000,
            following: 1295,
            followers: '7,2 million'
            };
            const userNameStyle={
                color: user.gender==='male'? "brown": "violet",
                position:'absolute',
                marginLeft: '170px',
                marginTop: '395px',
                fontSize: '25px',
                fontWeight: 'bold'
            };
            const userGmailStyle={
                color: user.gender==='male'? "white": "pink",
                position:'absolute',
                marginLeft: '190px',
                marginTop: '425px',
                fontSize: '17px'
            }
 return <article>
   <h2 className='userName' style={userNameStyle}>{user.firstName} {user.lastName}</h2>
   <p className='gmail' style={userGmailStyle}>{user.gmail}</p>
    <img className='userImg' src={user.imgSrc} alt={user.firstName} />
    <ol className='userInfo'>
        <li className='userInfoLi1'>Tweets </li>
        <li className='userInfoLi1'>Following </li>
        <li className='userInfoLi1'>Followers </li>
    </ol>
    <ol className='userInfo2'>
    <li className='userInfoLi2'>{user.tweets}</li>
        <li className='userInfoLi2'>{user.following}</li>
        <li className='userInfoLi2'> {user.followers}</li>
    </ol>
 </article>

}


