import DfoButton from "./button.vue";

export default {
  title: "Atoms/Button",
  component: DfoButton,
  args: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DfoButton },
  template: '<DfoButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  /* your default args */
};

// export const Button = {
//     args: {

//     },
//     argTypes: {
//     },
//     render(args) {
//         return {
//             components: { PwButton,PwColumn,PwContainer },
//             setup() {
//                 return { args };
//             },
//             template: `
//               <div>
//               <div style="font-size: 32px; font-weight: 800; margin-bottom: 12px; border-bottom: 1px solid #B2B2B2;">
//                 Primary
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px; display: flex">
//                   Primary
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-left="alert">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-right="alert">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-only="alert"></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="primary" icon-right="alert" loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Primary Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-left="alert" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-right="alert" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary" icon-only="alert" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="primary" icon-right="alert" disabled loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Primary Inverse
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" >Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-left="alert" >Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-right="alert" >Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-only="alert" ></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="primary-inverse" icon-right="alert"  loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Primary Inverse Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-left="alert" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-right="alert" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="primary-inverse" icon-only="alert" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="primary-inverse" icon-right="alert" disabled loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>

//               <div style="font-size: 32px; font-weight: 800; margin-bottom: 12px; border-bottom: 1px solid #B2B2B2;">
//                 Download Button
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Download
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-left="download">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-right="download">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-only="download"></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="download" icon-right="download" loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Download Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-left="download" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-right="download" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="download" icon-only="download" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="download" icon-right="download" loading disabled>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>

//               <div style="font-size: 32px; font-weight: 800; margin-bottom: 12px; border-bottom: 1px solid #B2B2B2;">
//                 Button Paid
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Paid
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-left="checkmark" >Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-right="checkmark" >Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-only="checkmark" ></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="paid" icon-right="checkmark" loading >Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Paid Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-left="checkmark" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-right="checkmark" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="paid" icon-only="checkmark" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="paid" icon-right="checkmark" loading disabled>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Paid Inverse
//                 </div>
//                 ////
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Paid Inverse Disabled
//                 </div>
//                 ///
//               </div>

//               <div style="font-size: 32px; font-weight: 800; margin-bottom: 12px; border-bottom: 1px solid #B2B2B2;">
//                 Button Credit
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Credit
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-left="reader">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-right="reader">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-only="reader"></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="credit" icon-right="reader" loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Credit Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-left="reader" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-right="reader" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="credit" icon-only="reader" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="credit" icon-right="reader" loading disabled>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>

//               <div style="font-size: 32px; font-weight: 800; margin-bottom: 12px; border-bottom: 1px solid #B2B2B2;">
//                 Button Payment Reminder
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Payment Reminder
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-left="mail">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-right="mail">Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-only="mail"></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="payment-reminder" icon-right="mail" loading>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>
//               <div style="margin-bottom: 24px;">
//                 <div style="font-size: 20px; font-weight: 800; margin-bottom: 12px;">
//                   Credit Disabled
//                 </div>
//                 <pw-container flex-justify="space-between">
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-left="mail" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-right="mail" disabled>Button</pw-button>
//                   </pw-column>
//                   <pw-column :col="2" justify-content="center">
//                     <pw-button variant="payment-reminder" icon-only="mail" disabled></pw-button>
//                   </pw-column>
//                   <pw-column :col="2">
//                     <pw-button variant="payment-reminder" icon-right="mail" loading disabled>Button</pw-button>
//                   </pw-column>
//                 </pw-container>
//               </div>

//               </div>
//              `,
//         };
//     },
// };
