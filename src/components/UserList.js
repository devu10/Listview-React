export const UserList = ({displayList}) => {
    return (
        <div className="display-list">{displayList.map((itm, ind)=>( <div key={ind}>{itm}</div>)
      )}</div>
    );
}