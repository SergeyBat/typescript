enum PaymentStatus {
	Success = "success",
	Failed = "failed"
}

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

interface IPaymentRequest extends IPayment { }

interface DataSuccess extends IPayment {
	databaseId: number
}

interface IDataFailed {
	errorMessage: string, 
	errorCode: number
}

interface IResponceSuccess {
	status: PaymentStatus.Success;
	data: DataSuccess
}

interface IResponceFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}