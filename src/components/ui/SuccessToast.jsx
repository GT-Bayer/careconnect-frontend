import { CircleCheck, X } from "lucide-react";

export default function SuccessToast({
    title,
    message,
    onClose,
}) {
    return (
        <>
            <style>
                {`
                    @keyframes successToastEnter {
                        0% {
                            opacity: 0;
                            transform: translateX(40px) scale(0.96);
                        }

                        70% {
                            transform: translateX(-4px) scale(1.01);
                        }

                        100% {
                            opacity: 1;
                            transform: translateX(0) scale(1);
                        }
                    }

                    @keyframes successToastProgress {
                        from {
                            width: 100%;
                        }

                        to {
                            width: 0%;
                        }
                    }

                    .success-toast {
                        animation:
                            successToastEnter
                            0.4s
                            ease-out;
                    }

                    .success-toast-progress {
                        animation:
                            successToastProgress
                            2s
                            linear
                            forwards;
                    }
                `}
            </style>

            <div
                className="
                    success-toast
                    fixed
                    right-5 top-20
                    z-[100]
                    w-[calc(100%-2.5rem)]
                    max-w-sm
                    rounded-xl
                    border border-teal-200
                    bg-white
                    p-4
                    shadow-lg
                "
            >
                <div className="flex items-start gap-3">
                    <div
                        className="
                            flex h-10 w-10
                            shrink-0
                            items-center justify-center
                            rounded-full
                            bg-teal-50
                        "
                    >
                        <CircleCheck
                            size={23}
                            className="text-teal-600"
                        />
                    </div>

                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                            {title}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            {message}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            text-gray-400
                            transition
                            hover:text-gray-600
                        "
                        aria-label="Cerrar notificación"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div
                    className="
                        mt-3
                        h-1
                        overflow-hidden
                        rounded-full
                        bg-teal-100
                    "
                >
                    <div
                        className="
                            success-toast-progress
                            h-full
                            rounded-full
                            bg-teal-600
                        "
                    />
                </div>
            </div>
        </>
    );
}