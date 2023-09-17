import {styled} from "styled-components"

export  const RoomListWrapper = styled.div`


padding: 20px 0;

  display: flex;
  gap: 6px;
  height: 60px;
  align-items: flex-end;
  cursor: pointer;
  border-bottom: 0.1px solid rgba(65, 64, 64, 0.445);



  .room_title_box {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  img {
  padding-top: 4px;
}
.room_title {
  flex: 1;
  display: flex;
  flex-direction: column;
  .room_type {
    font-size: 10px !important;
    color: gray;
  }
  .room_name {
    font-size: 15px !important;
  }
}
}
.user_connected {
  flex: 1;
}
.user_connected span {
  font-size: 11px;
  color: gray;
}
.updated {
  display: flex;
  flex: 1;
}
.updated p,
.updated span {
  font-size: 11px;
  color: rgba(128,128,128,0.43);
}



`