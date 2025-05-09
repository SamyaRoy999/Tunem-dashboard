import {
  Avatar,
  Button,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  PopconfirmProps,
  Select,
  Table,
} from "antd";
import { Pencil, Search, Trash } from "lucide-react";
import React, { useState } from "react";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";

const Top_Artist = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserAction | null>(null);
  const [role, setRole] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageSize = 10;

  const dataSource = [
    {
      key: "1",
      name: "Samantha Rivers",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      key: "2",
      name: "Marcus Thompson",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      key: "3",
      name: "Elena Martinez",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      key: "4",
      name: "Derek Johnson",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      key: "5",
      name: "Tina Chen",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      key: "6",
      name: "Oliver Brown",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    {
      key: "7",
      name: "Ava Patel",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    {
      key: "8",
      name: "Liam Smith",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    {
      key: "9",
      name: "Zoe Kim",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    {
      key: "10",
      name: "Shila",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=10",
    },
    {
      key: "11",
      name: "Lorry Kim",
      artist: "Charlie",
      genre: "Slap house",
      charlie: "Slap house",
      bpm: "123",
      keys: "C Major",
      gender: "Male",
      license: "Non-exclusive",
      price: "€1,000",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
  ];

  // delete
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  // edit modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const columns = [
    {
      title: "Artist",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar src={record.avatar} />
          <h2>{text}</h2>
        </div>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex gap-2">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                fill="#E53E3E"
              />
            </svg>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-[#121212] text-[20px] font-semibold font-degular ">
              Top Artist List
            </h1>
            <p className="font-degular font-normal text-sm pb-4 pt-2">
              Update your top artist list. You can or delete artist.
            </p>
          </div>
          <Button
            type="default"
            onClick={showModal}
            className="bg-[#E7F056] p-4 border-none text-base text-[#3A3A3A] font-degular font-semibold"
            shape="round"
          >
            Add new song
          </Button>
        </div>
        {/* <Input
          prefix={<Search />}
          className="w-full rounded-2xl h-12 bg-base border-0 text-primary placeholder:text-gray-200"
          placeholder="Search for Listing"
          style={{
            backgroundColor: "#f0f0f0",
            color: "#333333",
          }}
        /> */}
      </div>
      <div className="py-8">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize,
            total: 50,
            current: currentPage,
            onChange: handlePage,
          }}
          rowClassName={() => "hover:bg-transparent"}
        />
        {/* modal */}
        <Modal
          title="Basic Modal"
          className="!w-[650px] "
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <div className="flex gap-4 ">
              <Button
                onClick={handleCancel}
                className="w-full  bg-[#fff5f4] text-[#FF3B30] border-none rounded-2xl p-5 font-bold font-degular text-xl"
              >
                Cancel
              </Button>
              <Button
                htmlType="submit"
                onClick={handleOk}
                className="w-full bg-[#E7F056] border-none rounded-2xl p-5 font-bold font-degular text-xl"
              >
                Save changes
              </Button>
            </div>
          }
        >
          <Form onFinish={onFinish} style={{ paddingBottom: "40px" }}>
            {/* Artist name */}
            <Form.Item label="Artist name" name="artistName" layout="vertical">
              <Select
                showSearch
                className="w-full  bg-[#f5f5f5] h-[45px] font-degular font-normal text-base rounded-lg"
                placeholder="Select the name from list"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Top_Artist;
