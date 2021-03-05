import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: "1in",
  },
  text: {
    marginTop: 20,
    lineHeight: 1.5,
    fontSize: 12,
  },
  listItem: {
    marginTop: 2,
    marginLeft: 20,
    lineHeight: 1.5,
    fontSize: 12,
  },
  listItemFirst: {
    marginTop: 10,
  },
  underline: {
    textDecoration: "underline",
  },
});

export default function ViewOffer(props) {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Text style={styles.text}>{props.date}</Text>
        <Text style={styles.text}>Dear {props.name},</Text>
        <Text style={styles.text}>
          Reserved.ai is pleased to confirm our offer to you for a Principal
          Engineer position, for you to work remotely from Vancouver, BC. Your
          anticipated start date will be {props.start}.
        </Text>
        <Text style={styles.text}>
          Reserved.ai offers you compensation from your first working day
          through your last working day as follows:
        </Text>
        <Text style={{ ...styles.listItem, ...styles.listItemFirst }}>
          1. A starting salary of $120,000 per year. Your wages will be payable
          in two equal payments per month pursuant to the Company’s regular
          payroll policy.
        </Text>
        <Text style={styles.listItem}>2. Paid Holidays</Text>
        <Text style={styles.listItem}>3. Employment Benefits</Text>
        <Text style={styles.listItem}>
          4. Assistance with obtaining employment authorization, as required
        </Text>
        <Text style={styles.text}>
          As an Intern, you are entitled to the Reserved.ai benefits as listed
          above. By accepting this offer you fully understand and agree to the
          terms contained herein.
        </Text>
        <Text style={{ ...styles.text, ...styles.underline }}>
          Signing Bonus
        </Text>
        <Text style={styles.text}>
          In addition, we are pleased to offer you a signing bonus in the total
          gross amount of $15,000.00 USD, less applicable tax withholdings. This
          bonus will be paid to you within the first 30 days following your
          start date. This payment represents our genuine interest in you
          completing another internship at Reserved.ai. Please note that this
          signing bonus will be considered taxable income and payroll taxes will
          be withheld. In the unlikely event that you do not complete your
          internship of your own volition, the bonus will not be considered
          earned and must be returned to Reserved.ai in full. By signing this
          offer letter, you hereby authorize Reserved.ai to withhold this amount
          from any monies owed to you.
        </Text>
        <Text style={{ ...styles.text, ...styles.underline }}>
          Offer Contingent on Immigration Status and Background Check and
          Professional References.
        </Text>
        <Text style={styles.text}>
          Please note that this offer is contingent on the successful completion
          of a background check and professional references and, if applicable,
          successful completion of a deemed export compliance review in
          accordance with the Federal Export Administration Regulations and the
          Directorate of Defense Trade Controls.
        </Text>
        <Text style={styles.text}>Sincerely,</Text>
        <Text style={styles.text}>Jane Doe</Text>
        <Text style={styles.text}>Hiring Manager at Reserved.ai</Text>
      </Page>
    </Document>
  );
}
