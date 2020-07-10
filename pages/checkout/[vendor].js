// import components
import CheckoutPage from "../../components/Checkout/CheckoutPage";
import PrivateRoute from "../../components/PrivateRoute";
// import store / actions
import { creds_areValid } from "../../store/actions/auth";

// ******************
// component
// ******************

export default ({ isAuth, ...props }) => {
	return (
		<PrivateRoute isAuth={isAuth}>
			<CheckoutPage {...props} />;
		</PrivateRoute>
	);
};

// ******************
// inital props
// ******************
export const getServerSideProps = async (ctx, req) => {
	const isAuth = creds_areValid(ctx);

	return { props: { isAuth } };
};
