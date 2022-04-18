import React from 'react';

const Blog = () => {
    return (
        <div style={{ borderRadius: '20px' }} className=' container mx-auto d-block m-5'>
            <div>

                <h1 className='text-center text-info'>Welcome To blogs page</h1>
            </div>
            <div className='p-4'>
                <h5 className=' fs-3'>Difference between Authentication and Authorization</h5>
                <h4 style={{ color: 'orange' }}>Authentication:</h4>
                <p>Authentication is to verify your credentials, such as username and password, to verify your identity. The system determines whether the user's credentials are what the user's credentials are using. On public and private networks, the system verifies the user's identity with a login password. Authentication is usually done by a username and password and is sometimes combined with authentication factors, which refer to different ways of authentication. The identity of a user can be determined by what he knows, what he has or what he is. When it comes to security, someone needs to verify at least two or three authentication reasons to gain access to the system.</p>
                <h4 style={{ color: 'orange' }}>Authorization:</h4>
                <p>Authorization, On the other hand, your identity comes after successful authentication by the system, which ultimately gives you complete access to resources like information, files, databases, funds, location, and almost anything. Simply put, authorization determines your ability to access your system and to what extent.</p>
            </div>
            <div className='p-4'>
                <h5 className=' fs-3'>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <h4 style={{ color: 'orange' }}>Why using firebase:</h4>
                <p>Firebase can be used as a server-less backend for your mobile apps, web apps, etc. This is a service provided by Google. It has many features like a real-time database, cloud function, analytics,crash litics, cloud firestore, etc. Using Firebase to quickly develop backends and not having to worry about servers etc, Google will take care of it.</p>
                <h4 style={{ color: 'orange' }}> other options for implementing authentication:</h4>
                <h6>1. Parse - Open Source Backend Platform;</h6>
                <h6>2. Back4app - Parse Hosting Platform</h6>
                <h6>3. Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise</h6>
                <h6>4. Backendless - Mobile Backend and API Services Platform</h6>
                <h6>5. Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects</h6>
                <h6>6. Pubnub - Real-time APIs and Global Messaging</h6>
                <h6>7. Kumulos  App Performance Management</h6>
                <h6>8. Game Sparks  Game Backend Platform</h6>
                <h6>9. Hoodie - Generic backend with a client API for Offline First applications</h6>
                <h6>10. Appwrite - Open-Source backend for Flutter developers</h6>
            </div>
            <div className='p-4'>
                <h5 className=' fs-3'>What other services does firebase provide other than authentication</h5>
                <h4 style={{ color: 'orange' }}>Firebase services: </h4>
                <h6>1.Cloud Storage.</h6>
                <h6>2. Cloud Firestore.</h6>
                <h6>3. Firebase Realtime Database.</h6>
                <h6>4. Firebase Hosting.</h6>
                <h6>5. A/B Testing.</h6>
                <h6>6. Analytics.</h6>
                <h6>7. App Distribution.</h6>
                <h6>8. App Indexing.</h6>
                <h6>9. Dynamic Links.</h6>
                <h6>10. In-App Messaging.</h6>
                <h6>11. Predictions. </h6>
                <h6>12. Remote Config.</h6>      
            </div>
        </div>
    );
};

export default Blog;