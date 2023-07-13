import mongoose, { Schema } from "mongoose";

const signUpSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    //   transform: (obj, ret) => {
    //     delete ret._id;
    //   },
    // },
  }
);

signUpSchema.methods = {
  view(full) {
    const view = {
      id: this.id,
      fullName: this.fullName,
      userName: this.userName,
      email: this.email,
      password: this.password,
      date: this.date,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const Signup = mongoose.model("Signup", signUpSchema);

export const schema = Signup.schema;
export default Signup;
