import DashboardNavbar from "../../components/dashboard/Navbar";
import Note from "../../components/Note";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "../Dashboard/AddEditNotes";
import Modal from "react-modal";
import { useState } from "react";

const Dashboard = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <DashboardNavbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Note
            title="Meeting on 7th April"
            date="3rd Apr 2024"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        onClick={() => {
          setOpenAddEditModal({ isShow: true, type: "add", data: null });
        }}
        className="absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-blue-600 right-10 bottom-10"
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={openAddEditModal.isShow}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 "
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShow: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Dashboard;
