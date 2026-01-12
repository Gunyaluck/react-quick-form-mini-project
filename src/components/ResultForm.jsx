import { Film } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export function ResultForm({ formData, onNewSurvey }) {
  const movieTitle = formData.favoriteMovie.split(" (")[0];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100 sm:p-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-[600px] overflow-hidden">
        <div className="bg-linear-to-r from-violet-600 to-purple-500 p-6 flex items-center gap-3">
          <Film className="w-8 h-8 text-white" />
          <h1 className="text-white text-2xl font-bold m-0">Movie Survey</h1>
        </div>

        <div className="p-8 sm:p-6">
          <div className="p-4 flex justify-center flex-col bg-green-50 border-b-green-600 rounded-lg border-green-200 mb-6">
            <div className="rounded-lg p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-green-600 font-medium m-0">
                ส่งแบบสำรวจสำเร็จ!
              </p>
            </div>

            <div>
              <div className="flex items-center py-3">
                <span className="text-gray-600 font-medium w-1/3">ชื่อ:</span>
                <span className="text-gray-800 font-semibold">
                  {formData.name}
                </span>
              </div>

              <div className="flex items-center py-3">
                <span className="text-gray-600 font-medium w-1/3">อีเมล:</span>
                <span className="text-gray-800 font-semibold">
                  {formData.email}
                </span>
              </div>

              <div className="flex items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium w-1/3">
                  หนังที่เลือก:
                </span>
                <span className="text-violet-600 font-semibold">
                  {movieTitle}
                </span>
              </div>

              <div className="flex items-center py-3">
                <span className="text-gray-600 font-medium w-1/3">
                  ความคิดเห็น:
                </span>
                <span className="text-gray-800 font-semibold">
                  {formData.comments}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onNewSurvey}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-all border-none font-inherit bg-gray-800 text-white hover:bg-gray-900 sm:w-full"
          >
            <RotateCcw className="w-4 h-4" />
            ทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    </div>
  );
}
