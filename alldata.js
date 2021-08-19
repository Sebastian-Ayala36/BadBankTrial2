function AllData(){
    const ctx = React.useContext(UserContext);
    return(
        <div className='content'>
            <h1> All Data</h1>
            <div className='json'>
                {JSON.stringify(ctx, null, 2)}
            </div>
        </div>
    );
}

export default AllData;