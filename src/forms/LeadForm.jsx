import React from "react";
import { Form, Input, InputNumber } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function LeadForm({ isUpdateForm = false }) {
  return (
    <>
    <Form.Item
      label="Title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input the video title!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="description"
      label="Description"
      rules={[
        {
          required: true,
          message: 'Please input the video description!',
        },
      ]}
    >
      <Input.TextArea rows={4} />
    </Form.Item>
    <Form.Item
      label="Genre"
      name="genre"
      rules={[
        {
          required: true,
          message: 'Please input the video genre!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Link"
      name="link"
      rules={[
        {
          required: true,
          message: 'Please input the video link!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Release Date"
      name="releaseDate"
      rules={[
        {
          required: true,
          message: 'Please input the release date!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>
    <Form.Item
      label="Duration (in minutes)"
      name="duration"
      rules={[
        {
          required: true,
          message: 'Please input the video duration!',
        },
      ]}
    >
      <InputNumber min={1} />
    </Form.Item>
  </>
  
  );
}
