import notifStyles from "./Notification.module.css";
type notificationProps = {
  isWinner: boolean;
  isLoser: boolean;
};

export default function Notification({ isWinner, isLoser }: notificationProps) {
  return (
    <div className={notifStyles.notification_text}>
      {isWinner && (
        <div>
          <p className={`${notifStyles.notification_text} ${notifStyles.notification_text__specified}`}>Winner!</p>
          <p className={notifStyles.notification_text}>Refresh to try again</p>
        </div>
      )}
      {isLoser && (
        <div>
          <p className={`${notifStyles.notification_text} ${notifStyles.notification_text__specified}`}>You lost!</p>
          <p className={notifStyles.notification_text}>Refresh to try again</p>
        </div>
      )}
    </div>
  );
}
