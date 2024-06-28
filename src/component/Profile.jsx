import { useState } from "react";
import { Form, Input, Button, Checkbox, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Profile = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("/path/to/default/avatar.jpg");

  const handleUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
      setImageUrl(URL.createObjectURL(file));
    }, 1000);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-center space-x-4">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <Upload customRequest={handleUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Change Photo</Button>
        </Upload>
      </div>
      <Form
        form={form}
        name="userProfile"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          fullName: "",
          username: "",
          email: "",
          about: "",
          notifications: ["blog", "newsletter", "offers"],
        }}
        className="mt-6 space-y-6"
      >
        <Form.Item label="Full Name" name="fullName">
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="About" name="about">
          <Input.TextArea rows={4} />
        </Form.Item>
        <div className="flex space-x-4">
          <Form.Item
            label="Current Password"
            name="currentPassword"
            className="flex-1"
            rules={[
              {
                required: true,
                message: "Please input your current password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            className="flex-1"
            rules={[
              { required: true, message: "Please input your new password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            className="flex-1"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your new password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <Form.Item
          name="notifications"
          label="Email Notifications"
          className="flex flex-col items-start"
        >
          <Checkbox.Group>
            <Checkbox value="blog" style={{ lineHeight: "32px" }}>
              Blog posts
            </Checkbox>
            <Checkbox value="newsletter" style={{ lineHeight: "32px" }}>
              Newsletter
            </Checkbox>
            <Checkbox value="offers" style={{ lineHeight: "32px" }}>
              Personal Offers
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-green-500">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;